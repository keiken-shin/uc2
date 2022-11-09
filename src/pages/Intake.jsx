import React, { useState } from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from '../components';
import { Input, RadioButton } from '../components/forms';
import { Arrow } from '../components/icons';
import 'react-phone-input-2/lib/style.css';

const FormDetails = [
  {
    title: 'Where are you from?',
    values: ['New York', 'California', 'Florida', 'Texas', 'Illinois'],
    name: 'place',
  },
  {
    title: "What's your case about?",
    values: [
      'Employment',
      'Housing & Rent',
      'Accidental Injuries',
      'Goods & Services',
      'Debt',
      'Privacy & Defamation',
    ],
    name: 'case_name',
  },
  {
    title: 'What specifically?',
    values: ['Product', 'Service'],
    name: 'category',
  },
  {
    title: 'What describes you best',
    values: ['Individual', 'Business', 'Freelancer'],
    name: 'user_type',
  },
  {
    title: 'Do you have a witness?',
    values: ['Yes', 'No'],
    name: 'have_witness',
  },
  {
    title: 'Do you know what you need?',
    values: [
      'Send an official demand letter',
      'File my case in court',
      'Handle my entire case',
    ],
    name: 'theme',
  },
  {
    title: 'Great we can work on your case. How can we get in touch?',
    values: ['Phone', 'Email'],
    name: 'contact_type',
  },
];

export function Intake() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    place: '',
    case_name: '',
    category: '',
    user_type: '',
    have_witness: '',
    theme: '',
    contact_type: '',
    cc: '',
    phone: '',
    email: '',
  });

  function renderContactForm(type) {
    if (type === 'email') {
      return (
        <Input
          label="Your Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      );
    } else if (type === 'phone') {
      return (
        <ReactPhoneInput
          country="in"
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true,
          }}
          value={formData.phone}
          onChange={(value, country) =>
            setFormData((prev) => ({ ...prev, cc: country, phone: value }))
          }
          enableSearch
          disableSearchIcon
          containerClass="w-full lg:w-1/3 lg:mr-10"
          countryCodeEditable={false}
        />
      );
    }
  }

  const handleNavigation = (e) => {
    const direction = e.target.name;

    setPage((currentPage) =>
      direction === 'next' ? currentPage + 1 : currentPage - 1,
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  React.useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="flex flex-col items-center relative p-8">
      <button
        name="prev"
        className="w-10 h-10 flex items-center justify-center rounded-full absolute left-8 top-8 bg-neutral-200"
        onClick={(e) => (page === 0 ? navigate(-1) : handleNavigation(e))}
      >
        <Arrow className="w-6 h-6 stroke-neutral-600 stroke-2" />
      </button>

      <div className="flex flex-col items-center">
        <h4 className="text-neutral-400 font-medium mb-4">
          Initial Assessment
        </h4>
        <ProgressBar barLength={FormDetails.length} currentPage={page + 1} />
      </div>

      <section className="mt-8">
        <p className="text-center text-4xl font-bold text-neutral-800">
          {FormDetails[page].title}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 mx-auto w-full lg:w-3/4">
          {FormDetails[page].values.map((value, idx) => (
            <RadioButton
              key={idx}
              label={value}
              value={value.toLowerCase()}
              name={FormDetails[page].name}
              onChange={handleChange}
              checked={formData[FormDetails[page].name] === value.toLowerCase()}
            />
          ))}
        </div>

        {FormDetails[page].name === 'contact_type' && formData.contact_type && (
          <div className="mt-8 flex flex-wrap justify-center gap-4 mx-auto w-full lg:w-3/4">
            {renderContactForm(formData.contact_type)}
          </div>
        )}
      </section>

      <section className="mt-8">
        <button
          onClick={handleNavigation}
          name="next"
          className="action-button w-64 items-center justify-center disabled:bg-neutral-300 disabled:hover:translate-y-0 disabled:shadow-none disabled:hover:shadow-none"
          disabled={page === FormDetails.length - 1}
        >
          Next
        </button>
      </section>
    </div>
  );
}
