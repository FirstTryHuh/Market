const Detail = () => {
  function MakeSmallWindow(){
    return(
      <div>
        <div>{img}</div>
        <div>{name}</div>
        <div>{where}</div>
        <div>{star}</div>
        <div>{cost}</div>

        {/* side bar */}
        <div>{quantity}</div>
        <div>{add to cart}</div>
        <div>{buy now}</div>
        {/* under bar */}
        <div>{product info}</div>
        <div>About this item</div>
      </div>
    )}
  return (
    <div>Detail</div>
  )
}

export default Detail