import React from 'react'

function Footer() {
    return (
        <footer className='footer-distributed'> 
            <div class="footer-left">

            <h3>Sprout's & <span>Spruce's Shelter</span></h3>

            <p class="footer-company-name">Sprout's & Spruce's Shelter © 2022</p>
            </div>

            <div class="footer-center">

            <div>
            <i class="fa fa-map-marker"></i>
            <p><span>4648 Ebert Road</span> Lake Deonville, Idaho</p>
            </div>

            <div>
            <i class="fa fa-phone"></i>
            <p>480-795-2279</p>
            </div>

            <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:info@sproutandspruce.org">info@sproutandspruce.org</a></p>
            </div>

            </div>

            <div class="footer-right">

            <p class="footer-company-about">
            <span>About the shelter</span>
            It’s our mission to improve and save animal lives by promoting quality care and compassion through adoption and education.
            </p>

            <div class="footer-icons">

            {/* <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a> */}

            </div>

            </div>
        </footer>
    )
}

export default Footer