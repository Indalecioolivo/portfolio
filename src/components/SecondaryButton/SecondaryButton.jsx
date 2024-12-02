import "./SecondaryButton.css";
export default function SecondaryButton({ styleBtn, textBtn, handleFunction }) {
  return (
    <button className={styleBtn} onClick={handleFunction}>
      {textBtn}
    </button>
  );
}
