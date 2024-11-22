import { ChangeEvent, FormEvent, useState } from "react";

export const AllFormField = () => {
  const [login, setLogin] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [contact, setContact] = useState('');
  const [color, setColor] = useState('#000000');
  const [file, setFile] = useState<File | null>(null);
  const [rangeValue, setRangeValue] = useState(50);
  const [dateTime, setDateTime] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [url, setUrl] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [month, setMonth] = useState('');
  const [week, setWeek] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      login,
      age,
      bio,
      gender,
      agreement,
      contact,
      color,
      file,
      rangeValue,
      dateTime,
      password,
      email,
      tel,
      url,
      date,
      time,
      month,
      week,
    });
  };

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  const handleAgreementChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAgreement(e.target.checked);
  };

  const handleContactChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContact(e.target.value);
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.target.value));
  };

  const handleDateTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDateTime(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleTelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value);
  };

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handleMonthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value);
  };

  const handleWeekChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWeek(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="login"
          value={login}
          onChange={handleLoginChange}
        />
      </div>
      <div>
        <input
          type="number"
          name="age"
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <div>
        <textarea value={bio} name="bio" onChange={handleBioChange} />
      </div>
      <div>
        <select value={gender} onChange={handleGenderChange}>
          <option value="f">Kobieta</option>
          <option value="m">Mężczyzna</option>
          <option value="o">Inna</option>
        </select>
      </div>
      <div>
        <input
          type="checkbox"
          checked={agreement}
          onChange={handleAgreementChange}
        />
        Agreement
      </div>
      <div>
        <div>
          <input
            type="radio"
            name="contact"
            value="email"
            checked={contact === 'email'}
            onChange={handleContactChange}
          />
          Contact by Email
        </div>
        <div>
          <input
            type="radio"
            name="contact"
            value="sms"
            checked={contact === 'sms'}
            onChange={handleContactChange}
          />
          Contact by SMS
        </div>
        <div>
          <input
            type="radio"
            name="contact"
            value="none"
            checked={contact === 'none'}
            onChange={handleContactChange}
          />
          No Contact
        </div>
      </div>
      <div>
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
        />
        <p>Selected Color: {color}</p>
      </div>
      <div>
        <input
          type="file"
          onChange={handleFileChange}
        />
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="100"
          value={rangeValue}
          onChange={handleRangeChange}
        />
        <p>Range Value: {rangeValue}</p>
      </div>
      <div>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={handleDateTimeChange}
        />
        <p>Selected Date and Time: {dateTime}</p>
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <input
          type="tel"
          value={tel}
          onChange={handleTelChange}
        />
      </div>
      <div>
        <input
          type="url"
          value={url}
          onChange={handleUrlChange}
        />
      </div>
      <div>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <input
          type="time"
          value={time}
          onChange={handleTimeChange}
        />
      </div>
      <div>
        <input
          type="month"
          value={month}
          onChange={handleMonthChange}
        />
      </div>
      <div>
        <input
          type="week"
          value={week}
          onChange={handleWeekChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};
