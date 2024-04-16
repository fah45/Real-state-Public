

const Footer = () => {
    return (
        <footer className="footer p-10 mt-5 bg-base-200 text-base-content">
            <nav>
                <h6 className="footer-title">Contact Us</h6>
                <a className="link link-hover">Address: sector:04,Road:13,House:17,Dhaka</a>
                <a className="link link-hover">Phone: +8801705378993</a>
                <a className="link link-hover">Email: info@harmonyheightsresidence.com</a>
                <a className="link link-hover">Office Hours: Monday - Friday, 9:00 AM - 5:00 PM EST</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social Media</h6>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Twitter</a>
                <a className="link link-hover">whatsapp</a>
            </nav>
            <form>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="join overflow-hidden">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-[50%] join-item" />
                        <button className="btn btn-secondary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>  
    );
};

export default Footer;