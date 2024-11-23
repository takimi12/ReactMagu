import { FormEvent } from "react";
import { useForm } from "./finalHookStep3"; 

export const AllFormFieldStep2 = () => {
  const initialFormData = {
    login: '',
    age: '',
    bio: '',
    gender: '',
    agreement: false,
    contact: '',
    color: '#000000',
    file: null as File | null,
    rangeValue: 50,
    dateTime: '',
    password: '',
    email: '',
    tel: '',
    url: '',
    date: '',
    time: '',
    month: '',
    week: '',
  };

  const [formData, handleInputChange, errors, validate] = useForm(initialFormData);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="login"
          value={formData.login}
          onChange={handleInputChange}
        />
        {errors.login && <p style={{ color: 'red' }}>{errors.login}</p>}
      </div>
      <div>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
        {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
      </div>
      <div>
        <textarea name="bio" value={formData.bio} onChange={handleInputChange} />
      </div>
      <div>
        <select name="gender" value={formData.gender} onChange={handleInputChange}>
          <option value="f">Kobieta</option>
          <option value="m">Mężczyzna</option>
          <option value="o">Inna</option>
        </select>
      </div>
      <div>
        <input
          type="checkbox"
          name="agreement"
          checked={formData.agreement}
          onChange={handleInputChange}
        />
        Agreement
      </div>
      <div>
        <div>
          <input
            type="radio"
            name="contact"
            value="email"
            checked={formData.contact === 'email'}
            onChange={handleInputChange}
          />
          Contact by Email
        </div>
        <div>
          <input
            type="radio"
            name="contact"
            value="sms"
            checked={formData.contact === 'sms'}
            onChange={handleInputChange}
          />
          Contact by SMS
        </div>
        <div>
          <input
            type="radio"
            name="contact"
            value="none"
            checked={formData.contact === 'none'}
            onChange={handleInputChange}
          />
          No Contact
        </div>
      </div>
      <div>
        <input
          type="color"
          name="color"
          value={formData.color}
          onChange={handleInputChange}
        />
        <p>Selected Color: {formData.color}</p>
      </div>
      <div>
        <input
          type="file"
          name="file"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="range"
          name="rangeValue"
          min="0"
          max="100"
          value={formData.rangeValue}
          onChange={handleInputChange}
        />
        <p>Range Value: {formData.rangeValue}</p>
      </div>
      <div>
        <input
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime}
          onChange={handleInputChange}
        />
        <p>Selected Date and Time: {formData.dateTime}</p>
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <input
          type="tel"
          name="tel"
          value={formData.tel}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="url"
          name="url"
          value={formData.url}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="month"
          name="month"
          value={formData.month}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="week"
          name="week"
          value={formData.week}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Wyslij</button>
    </form>
  );
};