export function CartPage({cart}){
    return (
        <>
        {cart.map((cartItem) => (
            <div key={cartItem.product.id}>
      <section>
        <h1>{cartItem.product.title}</h1>
        <p>{cartItem.product.description}</p>
      </section>

        <section>
          <img width="500px" src={cartItem.product.thumbnail} />
        </section>

      <section>
        TAG: {cartItem.tagSelect}

        <div>
            <button
              style={{
                backgroundColor: cartItem.color,
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}  
            >
            </button>
        </div>
      </section>
    </div>

        ))}
        </>
    )
}