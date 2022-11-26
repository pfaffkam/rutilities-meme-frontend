// import React from 'react';

// const Form = () => {
//   const [values, setValues] = React.useState({
//     category: 'Null',
//     type: 'Null',
//     isNsfw: 'Null',
//     isUncropped: 'Null',
//     isMeme: 'Null'
//   });
//   const [validations, setValidations] = React.useState({
//     category: '',
//     type: '',
//     isNsfw: '',
//     isUncropped: '',
//     isMeme: ''
//   });

//   const validateAll = () => {
//     const { category, type, isNsfw, isUncropped, isMeme } = values;
//     const validations = { category: '', type: '', isNsfw: '', isUncropped: '', isMeme: '' };
//     let isValid = true;
//     if (category == 'Null') {
//       validations.category = 'Wybierz jedną z opcji!';
//       isValid = false;
//     } else {
//       console.log('Wybrano odpowiednią opcje!');
//     }
//     if (type == 'null') {
//       console.log('Wybierz jedną z opcji!');
//       isValid = false;
//     } else {
//       console.log('Wybrano odpowiednią opcje!');
//     }
//     if (isNsfw !== 'false' || 'true') {
//       console.log('Wybierz jedną z opcji!');
//       isValid = false;
//     } else {
//       console.log('Wybrano odpowiednią opcje!');
//     }
//     if (isUncropped !== 'false' || 'true') {
//       console.log('Wybierz jedną z opcji!');
//       isValid = false;
//     } else {
//       console.log('Wybrano odpowiednią opcje!');
//     }
//     if (isMeme !== 'false' || 'true') {
//       console.log('Wybierz jedną z opcji!');
//       isValid = false;
//     } else {
//       console.log('Wybrano odpowiednią opcje!');
//     }
//     return isValid;
//   };

//   const handleChange = (e) => {
//     console.log('im handle change');
//     const { category, value } = e.target;
//     setValues({ ...values, [category]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const isValid = validateAll();
//     console.log('i live');
//     console.log('Inpit name', e.target.category);
//     console.log('Inpit name', e.target.categoryVal);
//     console.log('Inpit name', e.target.type);
//     console.log('Inpit name', e.target.typeVal);

//     if (!isValid) {
//       setValidations(validations);
//     }

//     return isValid;
//   };
//   const { category, type, isNsfw, isMeme, isUncropped } = values;
//   const { category: categoryVal, type: typeVal, isNsfw: isNsfwVal, isMeme: isMemeVal, isUncropped: isUncroppedVal } = validations;
// };

// let patchMeme;


// export default Form;
