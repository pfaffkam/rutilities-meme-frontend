import { useEffect, useRef } from 'react';
import Category from './Category';
import Type from './Type';
import BooleanChooseField from './BooleanChooseField';

function Form({ setFormSubmitted, formSubmitted, form, setForm, handleFormSubmit, handleChange, formErrors, setFormErrors }) {
  const categorySelectRef = useRef();
  const typeSelectRef = useRef();
  const hasEmptyFields = Object.values(formErrors).some((error) => error);
  useEffect(() => {
    if (!formSubmitted) {
      return;
    }
    setFormErrors({
      category: true,
      type: true,
      isNsfw: true,
      isUncropped: true,
      isMeme: true
    });
    setForm({
      category: { id: '' },
      type: { id: '' },
      isNsfw: '',
      isUncropped: '',
      isMeme: ''
    });
    setFormSubmitted(false);
    categorySelectRef.current.value = 'Category';
    typeSelectRef.current.value = 'Type';
  }, [formSubmitted]);

  return (
    <form className=" pt-12 ml-4 md:ml-24" onSubmit={handleFormSubmit}>
      <Category handleChange={handleChange} reference={categorySelectRef} />
      <Type handleChange={handleChange} reference={typeSelectRef} />
      <BooleanChooseField
        form={form}
        handleChange={handleChange}
        fieldName="isNsfw"
        idValueDictionary={[
          { id: 'sfw', value: true, text: 'SFW' },
          { id: 'nsfw', value: false, text: 'NSFW' }
        ]}
      />
      <BooleanChooseField
        form={form}
        handleChange={handleChange}
        fieldName="isUncropped"
        idValueDictionary={[
          { id: 'cropped', value: true, text: 'Cropped' },
          { id: 'uncropped', value: false, text: 'Uncropped' }
        ]}
      />
      <BooleanChooseField
        form={form}
        handleChange={handleChange}
        fieldName="isMeme"
        idValueDictionary={[
          { id: 'meme', value: true, text: 'Meme' },
          { id: 'notmeme', value: false, text: 'Not meme' }
        ]}
      />
      <button type="submit" disabled={hasEmptyFields} className="flex mt-3 mb-24 bg-gray-300 hover:bg-gray-400 disabled:opacity-25 text-gray-800 font-bold py-2 px-4 rounded-full">
        Sort!
      </button>
    </form>
  );
}

export default Form;
