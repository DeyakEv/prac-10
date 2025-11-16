function Profile({ period, setPeriod }) {
  return (
    <section className="profile">
      <div className="profile-top">
        <img src="./avatar_male.png" alt="User" className="avatar" />
        <div className="info">
          <p>Report for</p>
          <h2>Evgen<br />Deyak</h2>
        </div>
      </div>
      <div className="periods">
        <button 
          className={period === 'daily' ? 'active' : ''} 
          onClick={() => setPeriod('daily')}
        >
          Daily
        </button>
        <button 
          className={period === 'weekly' ? 'active' : ''} 
          onClick={() => setPeriod('weekly')}
        >
          Weekly
        </button>
      </div>
    </section>
  );
}

export default Profile;