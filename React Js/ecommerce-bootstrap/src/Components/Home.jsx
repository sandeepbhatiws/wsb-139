import React from 'react'
import Header from './Header'

export default function Home() {
    return (
    <>
        <Header />

        
        
        <hr/>
        
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light " id="navbar">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav" id="nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Supermarket</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Paternship</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Baby & toys</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Fitness sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Clothing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Furniture</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                More
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Food & Drinks</a>
                                <a class="dropdown-item" href="#">Home interior </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Category 1</a>
                                <a class="dropdown-item" href="#">Category 2</a>
                                <a class="dropdown-item" href="#">Category 3</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <hr id="hr"/>

        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <ul class="list-group mt-5" id="list-ul">
                        <li class="list-group-item">Best Clothes</li>
                        <li class="list-group-item">Automobiles</li>
                        <li class="list-group-item">Home interior</li>
                        <li class="list-group-item">Electronics</li>
                        <li class="list-group-item">Technologies</li>
                        <li class="list-group-item dropdown dropright"><a class="dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Submenu name</a>
                                <a class="dropdown-item" href="#">Greatmenu name</a>
                                <a class="dropdown-item" href="#">Another menu</a>
                                <a class="dropdown-item" href="#">Same others</a>

                            </div>
                        </li>
                    </ul>

                </div>
                <div class="col-md-9">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner mt-5" id="car">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYKdc4-EM4JhSkmgKMC4nIuGKv_dexn7KyXw&usqp=CAU" alt="First slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="https://cdn.shopify.com/s/files/1/0074/0429/0111/files/Homepage-free-shipping-banner_1350x600.jpg?v=1591817221" alt="Second slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="https://i.pinimg.com/originals/df/c1/f9/dfc1f9ba2734aa94690f009d721440d7.jpg" alt="Third slide"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="products">
            <div class="container">
                <button class="btn btn-sm btn-outline-primary float-right mt-5 but">See all</button>
                <h1 class="pt-5 pb-5">Popular Products</h1>

                <div class="row">
                    <div class="col-md-3">
                        <div class="card">
                            <img class="card-img-top" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/1.jpg" alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text"><a href="https://codepen.io/deep890/pen/oNYdqMx" class= "text-dark">Denim shirt</a></p>
                                    <h4 class="pb-0 pt-0">$12</h4>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ok">
            <div class="container">
                <div class="row">

                    <div class="col-md-8">
                        <h3 class="mt-5">Download app demo text</h3>
                        <p>Get an amazing app to make your life easy</p>
                    </div>
                    <div class="col-md-4">
                        <img src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/misc/appstore.png" class="mt-5" id="cool"/>
                    </div>

                </div>
            </div>

        </div>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <ul>
                            <h6 class="mt-5">Brands</h6>
                            <li><a href="">Adidas</a></li>
                            <li><a href="">Puma</a></li>
                            <li><a href="">Reebok</a></li>
                            <li><a href="">Nike</a></li>
                        </ul>
                    </div>

                    <div class="col-md-3">
                        <ul>
                            <h6 class="mt-5">Company</h6>
                            <li><a href="">About us</a></li>
                            <li><a href="">Career</a></li>
                            <li><a href="">Find a store</a></li>
                            <li><a href="">Rules and terms</a></li>
                            <li><a href="">Sitemap</a></li>
                        </ul>
                    </div>


                    <div class="col-md-3">
                        <ul>
                            <h6 class="mt-5">Account</h6>
                            <li><a href="">User Login</a></li>
                            <li><a href="">User register</a></li>
                            <li><a href="">Account Setting</a></li>
                            <li><a href="">My Orders</a></li>

                        </ul>
                    </div>

                    <div class="col-md-3">
                        <ul>
                            <h6 class="mt-5">Social</h6>
                            <li><a href=""><i class="fab fa-facebook"></i> Facebook</a></li>
                            <li><a href=""><i class="fab fa-twitter"></i> Twitter</a></li>
                            <li><a href=""><i class="fab fa-instagram"></i> Instagram</a></li>
                            <li><a href=""><i class="fab fa-youtube"></i> Youtube</a></li>

                        </ul>
                    </div>

                </div>
            </div>
        </footer>

        {/* <!-- Modal --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header  bg-primary">
                        <h5 class="modal-title text-light" id="exampleModalLabel">Sign In</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                {/* <!--<label for="exampleInputEmail1">Email address</label>--> */}
                                <input type="email" class="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <div class="form-group">
                                    {/* <!--<label for="exampleInputPassword1">Password</label>--> */}
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <button type="submit" class="btn btn-primary mt-2">Submit</button>
                            </div>
                            <div class="signup">
                                <p class="float-right text-muted">If not registered,<a href="register.html" class="text-muted"> register now!</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
