import './button.css';

const Button = ({ onclick, sign, disabled }) => (
  <button className='butoane' onClick={onclick} disabled={disabled}>
    {sign}
  </button>
);

export default Button;
