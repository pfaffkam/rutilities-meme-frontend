import { useEffect, useRef } from 'react';
import Category from './Category';
import Type from './Type';
import BooleanChooseField from './BooleanChooseField';

function Form({ props }) {
  const { texts, form, formErrors, formSubmitted, setForm, setFormErrors, setFormSubmitted, handleSubmit, handleChange } = props;

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
    <form className=" pt-12 ml-4 md:ml-24" onSubmit={handleSubmit}>
      <Category texts={texts} handleChange={handleChange} reference={categorySelectRef} />
      <Type texts={texts} handleChange={handleChange} reference={typeSelectRef} />
      <BooleanChooseField
        texts={texts}
        form={form}
        handleChange={handleChange}
        fieldName="isNsfw"
        idValueDictionary={[
          { id: 'sfw', value: true, text: texts.texts.sfw },
          { id: 'nsfw', value: false, text: texts.texts.nsfw }
        ]}
      />
      <BooleanChooseField
        texts={texts}
        form={form}
        handleChange={handleChange}
        fieldName="isUncropped"
        idValueDictionary={[
          { id: 'cropped', value: true, text: texts.texts.cropped },
          { id: 'uncropped', value: false, text: texts.texts.unCropped }
        ]}
      />
      <BooleanChooseField
        texts={texts}
        form={form}
        handleChange={handleChange}
        fieldName="isMeme"
        idValueDictionary={[
          { id: 'meme', value: true, text: texts.texts.meme },
          { id: 'notmeme', value: false, text: texts.texts.notMeme }
        ]}
      />
      <button type="submit" disabled={hasEmptyFields} className="flex mt-3 mb-24 bg-gray-300 hover:bg-gray-400 disabled:opacity-25 text-gray-800 font-bold py-2 px-4 rounded-full">
        {texts.texts.sort}
      </button>
    </form>
  );
}

export default Form;
