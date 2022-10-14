function ButtonPrimary(props) {
  return (
    <button className="rounded-lg border bg-slate-400 text-center p-3 font-silkscreen text-white" onClick={props.onNavigate}>
      {props.label}
    </button>
  );
}

export default ButtonPrimary;
