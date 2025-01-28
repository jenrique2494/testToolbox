import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from './store/data/dataSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
 
const REACT_APP_API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001'; 

function App() {
  const dispatch = useDispatch();
  const filesData = useSelector(state => state.data.filesData);
  const [selectedFile, setSelectedFile] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = selectedFile
      ? `${REACT_APP_API_URL}/files/data?fileName=${selectedFile}`
      : `${REACT_APP_API_URL}/files/data`;

    axios.get(url)
      .then(response => {
        dispatch(setData(response.data));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, [selectedFile, dispatch]);

  return (
    <>
      <nav className="navbar bg-danger mb-4">
        <h1 className=" fs-3" >React Test App</h1>
      </nav>
      <div className="container">
        <input
          className="mb-3 form-contro"
          onChange={(e) => setSelectedFile(e.target.value)}
          value={selectedFile}
        />
        {loading ? <div className="text-center">Cargando...</div> :
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {filesData.flatMap(file =>
                file.lines.map((line, index) => (
                  <tr key={`${file.file}-${index}`}>
                    <td>{file.file}</td>
                    <td>{line.text}</td>
                    <td>{line.number}</td>
                    <td>{line.hex}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        }
      </div>
    </>
  );
}

export default App;
