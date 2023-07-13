import * as React from 'react';

interface Item {
  id: number;
  name: string;
}
interface INotfoundProps {
  item: Item;
}
const Notfound: React.FunctionComponent<INotfoundProps> = (  {item}) => {
  return (
    <>
     <div>
      {items.map((item) => (
        <ItemComponent key={item.id} item={item} />
      ))}
    </div>

    </>
  );
}

export default Notfound;