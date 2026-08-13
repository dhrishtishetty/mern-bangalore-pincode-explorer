const PincodeCard = ({ area, pincode }) => {
  return (
    <div className="pincode-card">
      <div>
        <h3>{area.name}</h3>

        <p>
          {area.district}, {area.state}
        </p>
      </div>

      <span className="pincode-badge">
        {pincode}
      </span>
    </div>
  );
};

export default PincodeCard;