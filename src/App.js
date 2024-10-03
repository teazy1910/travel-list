import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  //  Um welches Element handelt es sich? Beantwortet die Frage, welcher Initialwert als State gesetzt werden muss.

  // Dieser State muss von der Form in die App verschoben werden, weil wir die relevanten Objekte nicht anzeigen können. Die Anzeige funktioniert nur den "Tree" abwärts. (Siehe React Dev-Tools - Components)
  //  Man nennt dies auch : Lift Up State
  //  Man tut dies wenn die Geschwister Komponenten den State benötigen, hebt man den State in die übergeordnete Component, damit die alle drauf zugreifen könenn.

  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
