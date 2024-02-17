import './VolunteerPage.css'

export default function VolunteerPage() {
    return (
        <div className='volunteer-main'>
            <div className='volunteer-box'>
                <form action="">
                    <h1>გსურთ გახდეთ მოხალისე?</h1>

                    <div className="volunteer-checkbox">
                    <label htmlFor=""><input type="checkbox" />I will host an event</label>
                    </div>

                    <div className="volunteer-checkbox">
                    <label htmlFor=""><input type="checkbox" />I will be a social media ambassador</label>
                    </div>

                    <div className="volunteer-checkbox">
                    <label htmlFor=""><input type="checkbox" />I will help reach out to my network</label>
                    </div>

                    <hr className='volunteer-hr'/>

                    <div className="volunteer-input-box">
                        <input type="text" placeholder="სახელი" />
                        <input type="text" placeholder="გვარი" />
                    </div>

                    <div className="volunteer-input-box">
                        <input type="text" placeholder="Email" />
                    </div>

                    <div className="volunteer-input-box">
                        <input type="text" placeholder="დღის რა მონაკვეთში დაგიკავშირდეთ?" />
                    </div>

                    <div className="volunteer-input-box">
                        <input type="text" placeholder="რა დროა თქვენთვის მოსახერხებელი?" />
                    </div>

                    <div className="volunteer-input-box">
                        <input type="text" placeholder="კომენტარები, იდეები და ა.შ." />
                    </div>

                    <div className="volunteer-input-box">
                        <input type="text" placeholder="მისამართი" />
                    </div>

                    <div className="volunteer-input-box">
                        <input type="text" placeholder="ქალაქი" />
                    </div>

                    <hr className='volunteer-hr'/>

                    <div className="volunteer-checkbox">
                    <label htmlFor=""><input type="checkbox" />არ გამოქვეყნდეს ვებ გვერდზე</label>
                    </div>

                    <div className="volunteer-checkbox">
                    <label htmlFor=""><input type="checkbox" />მსურს განახლებები მივიღო მეილით</label>
                    </div>

                    <div className="volunteer-checkbox">
                    <label htmlFor=""><input type="checkbox" />მსურს განახლებები მივიღო მოკლე ტექსტური შეტყობინებით</label>
                    </div>

                    <button type="submit" className="btn">მოხალისის ინფორმაციის შენახვა</button>

                </form>
            </div>
        </div>
    )
}