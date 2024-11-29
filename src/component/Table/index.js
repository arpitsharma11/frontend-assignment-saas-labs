function Table({ headers, list }) {
  return (
    <table className="table">
      <thead>
        <tr className="table__row">
          {headers.map(({ name, key }) => (
            <th className="table__head" key={key}>
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody data-testid="table-body">
        {list.map((item) => (
          <tr className="table__row" key={`row-${item["s.no"]}`}>
            {headers.map(({ key }) => (
              <td className="table__data" key={`data-${item["s.no"]}-${key}`}>
                {item[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
