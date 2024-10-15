import { useEffect, useState } from "react";

type Props = {
    body: string,
    title: string,
};

export const Posts = () => {
    const [posts, setPosts] = useState<Props[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4; 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const totalPages = Math.ceil(posts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {currentPosts.map((el: Props) => (
                <div key={el.title}> 
                    <h3>{el.title}</h3>
                    <p>{el.body}</p>
                </div>
            ))}
            <div>
                <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <span>{` Page ${currentPage} of ${totalPages} `}</span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};
