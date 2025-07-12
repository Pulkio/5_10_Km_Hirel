import './Gauge.css';

const Gauge = ({ color, label, startTime }) => {

  return (
    <div className={`program-display ${color}`}>
      <p>{label}</p>
      <p className={`start-time ${color}`}>{startTime}</p>
    </div>
  );
};

export default Gauge;