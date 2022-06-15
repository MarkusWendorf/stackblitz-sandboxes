interface Item {
  id: number;
  name: string;
}

interface Props<T> {
  items: T[];
  onClick: (item: T) => void;
}

export function ListView<T extends Item>({ items, onClick }: Props<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => onClick(item)}>
          <div>{item.name}</div>
        </li>
      ))}
    </ul>
  );
}