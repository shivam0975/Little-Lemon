import React from 'react'
import recipes from '../recipes'
import Swal from 'sweetalert2'

const Menu = () => {

    const handleOrder = (id) => {
        console.log(id , "id is clicked");
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, order it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Ordered!",
                text: "Your order has been placed.",
                icon: "success"
              });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Order has been cancelled",
                icon: "error"
              });
            }
          });
    }

  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h2>This weeks specials!</h2>
        <button>Order Menu</button>
      </div>

      <div className='cards'>
        {
            recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                    <img src={recipe.image} alt=''/>
                    <div className='menu-content'>
                        <div className='heading'>
                            <h5>{recipe.title}</h5>
                            <p>{recipe.price}</p>
                        </div>
                        <p>{recipe.description}</p>
                        <button className='orderbtn' onClick={() => handleOrder(recipe.id)}>Order Now</button>
                    </div>
                </div>)
        }
      </div>
    </div>

    
  )
}

export default Menu
