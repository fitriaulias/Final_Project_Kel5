import React from 'react'

function AboutCardProgress(props) {
  return (
    <div>
      <p>Nama : {props.nama}</p>
      <p>Kode Peserta : {props.kodePeserta}</p>
      <p>Progress : {props.progress}</p>
    </div>
  )
}

export default AboutCardProgress