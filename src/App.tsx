import './App.css';

type OneType = {
  title: string;
  component: 'One';
};
const One = ({ title }: OneType) => {
  return <div>{title}</div>;
};

type TwoType = {
  price: number;
  component: 'Two';
};
const Two = ({ price }: TwoType) => {
  return <div>{price}</div>;
};

type ThreeType = {
  name: string;
  component: 'Three';
};
const Three = ({ name }: ThreeType) => {
  return <div>{name}</div>;
};

const components = {
  One,
  Two,
  Three,
};

type EntityType = OneType | TwoType | ThreeType;

const entities: EntityType[] = [
  { title: 'some', component: 'One' },
  { price: 9999, component: 'Two' },
  { name: 'some', component: 'Three' },
];

function App() {
  return (
    <>
      {entities.map((entity) => {
        const Component = components[entity.component];
        return <Component {...entity} />;
      })}
    </>
  );
}

export default App;
