import './LinkCard.css';

const LinkCard = ({ children, color = 'blue', link, unavailable = false }) => {
  const Wrapper = unavailable ? 'div' : 'a';

  return (
    <Wrapper
      href={unavailable ? undefined : link}
      target="_blank"
      rel="noreferrer"
      className={unavailable ? 'linkWrapper-disabled' : ''}
    >
      <div className={`linkCard ${color} ${unavailable ? 'disabled' : ''}`}>
        {children}
        {unavailable ? (
          <button className="unavailable" disabled>
            Indisponible
          </button>
        ) : (
          <button>
            Découvrir
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
            >
              <path
                d="M27.0817 12.2892C27.6556 11.6919 27.6366 10.7423 27.0392 10.1683L17.3043 0.81519C16.7069 0.241234 15.7574 0.260226 15.1834 0.857608C14.6095 1.45499 14.6285 2.40455 15.2258 2.9785L23.8791 11.2924L15.5652 19.9457C14.9912 20.5431 15.0102 21.4926 15.6076 22.0666C16.205 22.6405 17.1545 22.6215 17.7285 22.0242L27.0817 12.2892ZM1 11.75L1.02999 13.2497L26.03 12.7497L26 11.25L25.97 9.7503L0.970006 10.2503L1 11.75Z"
                fill="currentColor"
              />
            </svg>
          </button>
        )}
      </div>
    </Wrapper>
  );
};

export default LinkCard;
