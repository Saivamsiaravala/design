import React from "react";

const FormComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      age: form.age.value,
      dob: form.dob.value,
      gender: form.gender.value,
      salary: form.salary.value,
      address: form.address.value,
    };
    console.log(data);
    alert("Form submitted!");
    form.reset(); // Optional: resets the form
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Employee Form</h2>

      <label>
        Name
        <input type="text" name="name" required />
      </label>

      <label>
        Age
        <input type="number" name="age" required min={0} />
      </label>

      <label>
        Date of Birth
        <input type="date" name="dob" required />
      </label>

      <label>
        Gender
        <select name="gender" required>
          <option value="" disabled selected>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label>
        Salary
        <input type="number" name="salary" required min={0} />
      </label>

      <label>
        Address
        <textarea name="address" rows="3" required></textarea>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
