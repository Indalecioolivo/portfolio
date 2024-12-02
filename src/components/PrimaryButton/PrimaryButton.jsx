import "./PrimaryButton.css";
export default function PrimaryButton({ styleBtn, textBtn, handleFunction }) {
  return (
    <button className={styleBtn} onClick={handleFunction}>
      {textBtn}
    </button>
  );
}
