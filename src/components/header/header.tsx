import './style.css';

type props = {
  name: string,

};

export const HeaderMain = (props: props) => {
  return (
    <div className='HeaderMainWarp'>
      <header>
        <h1 className="HeaderMain">
        {props.name}
        </h1>
      </header>
    </div>
  );
};
