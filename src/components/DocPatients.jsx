import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function DocPatients() {

  const [card, setCard] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/doctors/patients/${id}`)
      .then((res) => res.json())
      .then((resCard) => {
        setCard(resCard);
        setIsLoaded(true);
      });
  }, [id]);

  if (!isLoaded) return <h1>Loading...</h1>;



  return (
    <div>DocPatients</div>
  )
}

export default DocPatients