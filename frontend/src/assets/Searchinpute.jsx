import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../context/search';

function Searchinpute() {
  const [search, setSearch] = useSearch();  // ✅ Correct hook usage
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    fetch(`https://backend-5ggv.onrender.com/product/search-products/${search.keyword}`)
      .then((res1) => res1.json())
      .then((res2) => {
        console.log(res2);
        setSearch({ ...search, result: res2 }); // ✅ Correct setter
        navigate('/search');
      });
  }

  return (
    <div>
      {/* <Form inline onSubmit={handleSearch}> */}
      <Form className="d-inline" onSubmit={handleSearch}>

        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2 bg-white ms-5 pa-5"
              value={search.keyword} // ✅ Correct value
              onChange={(e) => setSearch({ ...search, keyword: e.target.value })} // ✅ Correct update
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" variant="secondary" className="ms-5">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Searchinpute;





// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { useNavigate } from 'react-router-dom';
// import { useSearch } from '../context/search';
// function Searchinpute() {
//     // const [values,setValues]=useSearch()
//     const [search, setSearch] = useSearch();

//     const navigate=useNavigate()
//     function handleSearch(e)
//     {
//         e.preventDefault()
//         fetch(`https://backend-5ggv.onrender.com/product/search-products/${values.keyword}`).then((res1)=>{
//             res1.json().then((res2)=>{
//                 console.log(res2)
//                 setValues({...values,result:res2})
//                 navigate('/search')
//             })
//         })
//     }
//   return (
//     <div>
//       <Form inline onSubmit={handleSearch}>
//         <Row>
//           <Col xs="auto">
//             <Form.Control
//               type="text"
//               placeholder="Search"
//               className=" mr-sm-2 bg-white ms-5 pa-5"
//               value={values.keyword}
//               onChange={(e)=>setValues({...values,keyword:e.target.value})}
//             />
//           </Col>
//           <Col xs="auto">
//             <Button type="submit" variant='secondary' className='ms-5'>Search</Button>
//           </Col>
//         </Row>
//       </Form>
//     </div>
//   )
// }

// export default Searchinpute
