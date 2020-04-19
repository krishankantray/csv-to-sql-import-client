import React from 'react';
import styled from 'styled-components'
import { useTable, usePagination } from 'react-table'

const Styles = styled.div `
  table {
    margin: 20px 0 20px 0;
    border-collapse: collapse;
    font-size: 16px;
    
    tr {
        border: 1px solid #ddd;
        padding: 8px;
        :nth-child(even){background-color: #f2f2f2;}
        :hover {background-color: #ddd;}
    }

    th{
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: #00BA98;
        color: white;
        border: 1px solid #ffffff;
    }

    td {
        border: 1px solid #00BA98;
        padding: 8px;
         :last-child {
        border-right: 0;
      }
    }
  }
 .pagination{
    font-size: 18px;
 }
  
`

function Table({columns, data}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  )

  // Render Data Table UI
  return (
    <>
       <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>  

     {/* Pagination */}
     <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[3, 5, 15, 50, 100].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>

  )
}

function App(props) {


  const data = Object.values(props.tabledata);

  const columns = [
    {
      Header: 'id',
      accessor: 'id'
    }, {
      Header: 'level_col',
      accessor: 'level_col'
    }, {
      Header: 'cvss',
      accessor: 'cvss'
    }, {
      Header: 'title',
      accessor: 'title'
    },{
      Header: 'vulnerability',
      accessor: 'vulnerability'
    },{
      Header: 'solution',
      accessor: 'solution'
    },{
      Header: 'reference_col',
      accessor: 'reference_col'
    }
  ]

  return (
    <Styles>
      <Table data={data} columns={columns}/>
    </Styles>
  )

}

export default App