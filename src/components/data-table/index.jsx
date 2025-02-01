import "./index.css"

export default function Table({ children }) {
  return (
    <div className="data-table__wrapper overflow-x-auto">
      <table className="data-table">{children}</table>
    </div>
  )
}

export const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>
}

export function TableHeader({ children }) {
  return <thead>{children}</thead>
}

export function TableRow({ children }) {
  return <tr>{children}</tr>
}

export function TableCell({ children }) {
  return <td>{children}</td>
}
