import './Links.css'
export default function Links(){
    return(
        <>
        <div className="linkContainer">
            <div className="productsfooter">
                <div className="heading"><h1 className='h1'>Products</h1></div><br />
                <div className="hello">combos</div><br />
                <div className="hello">beard</div><br />
                <div className="hello">face</div><br />
                <div className="hello">hair</div><br />
                <div className="hello">body</div>
            </div>
            <div className="productsfooter">
                <div className="heading"><h1 className='h1'>Order</h1></div><br />
                <div className="hello">Account</div><br />
                <div className="hello">Track Order</div>
            </div>
            <div className="productsfooter">
                <div className="heading"><h1 className='h1'>Important Links</h1></div><br />
                <div className="hello">who we are</div><br />
                <div className="hello">contact us</div><br />
                <div className="hello">Privacy Policy</div><br />
                <div className="hello">Return and Refund policy</div>
            </div>
            <div className="productsfooter">
                <div className="heading"><h1 className='h1'>Community</h1></div>
                <div className="hello"><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-youtube"></i></div>
                <br />
                <div className="hello"><h2>Sign Up for Email</h2></div>
                <br />
                <div className="hello"><input type="text" name="" id="" /><button>Submit</button></div>
            </div>
        </div>
        <div className="mobilelinkcontainer">
        <div className="mobileproductsfooter">
                <div className="heading"><h1 className='h1'>Links</h1></div><br />
                <div className="hello">
                    <select name="" id="">
                        <option value="" selected>Product</option>
                        <option value="">Combo</option>
                        <option value="">Hair</option>
                        <option value="">Beard</option>
                        <option value="">Face</option>
                    </select>
                </div><br />
                <hr /><br></br>
                <div className="hello">
                    <select name="" id="">
                        <option value="" selected>Order</option>
                        <option value="">Combo</option>
                        <option value="">Hair</option>
                        <option value="">Beard</option>
                        <option value="">Face</option>
                    </select>
                </div><br />
                <hr /><br></br>
                <div className="hello">
                    <select name="" id="">
                        <option value="" selected>IMP Links</option>
                        <option value="">Combo</option>
                        <option value="">Hair</option>
                        <option value="">Beard</option>
                        <option value="">Face</option>
                    </select>
                </div><br />
            </div>
            <br /><br />
        <div className="mobileproductsfootercontact">
                <div className="heading"><h1 className='h1'>Community</h1></div>
                <div className="hello"><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-youtube"></i></div>
                <br />
                <div className="hello"><h2>Sign Up for Email</h2></div>
                <br />
                <div className="hello"><input type="text" name="" id="" /><button>Submit</button></div>
            </div>
        </div>
        </>
    )
}