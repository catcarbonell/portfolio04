import { useState } from 'react'
import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com'
init(process.env.EMAILJS)

export default function EmailForm(){
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [message, setMessage] = useState('')
    const [thanks, setThanks] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

       if(!userName || !userEmail || !message){
            setError(true)
        }else if(userEmail.match(mailFormat)){
            setThanks(true)
            sendEmail(e)
            
        }else{
            setError(true)
        }
    }

    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('gmail','contact', e.target, 'user_hmlit3hbKCtsWaPBh8nn3')
        .then((result)=>{
            console.log(result.text);
        }, (error) =>{
            console.log(error.text)
        })
    }
    
    return (
        <div className="w-1/2 flex flex-col">
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input type="hidden" name="contact_number" />
                    
                    <label htmlFor="from_name" className="uppercase text-xs">Name</label>
                    <br />
                    <input 
                        className="text-custom-flamingo rounded text-sm p-2 font-mono"  
                        placeholder="ex. Chun Li" 
                        type="text" 
                        name="from_name"
                        value={userName}
                        onChange={ e => setUserName(e.target.value)} />
                </div>
                
                <div className="mb-2">
                    <label htmlFor="from_email" className="uppercase text-xs">Email</label>
                    <br />
                    <input 
                        placeholder="ex. chunners@capcom.com" 
                        className="text-custom-flamingo rounded text-sm p-2 font-mono" 
                        type="email" 
                        name="from_email" 
                        value={userEmail}
                        onChange={ e => setUserEmail(e.target.value)}
                        />
                </div>
                
                <div className="mb-2">
                    <label htmlFor="message_html" className="uppercase text-xs">Message</label>
                    <br />
                    <textarea 
                        className="text-custom-flamingo rounded text-sm p-2 font-mono" 
                        name="message_html"
                        value={message}
                        onChange={ e => setMessage(e.target.value)} />
                </div>

                <div className="mt-4 w-20 text-center">
                    <button
                        className="cursor-pointer border-2 font-bold hover:bg-custom-flamingo rounded-lg uppercase text-xs px-4 py-2" 
                        type="submit">Send</button>
                </div>
            </form>
            {error &&
                 <div className="mt-8">
                    <p className="text-custom-flamingo">Please fill out this form</p>
                    <p className="cursor-pointer mt-4 font-xs underline hover:text-custom-flamingo" onClick={e => setError(false)}>clear</p>
                </div>
            }
            {thanks &&
                <div className="mt-8">
                    <p>Thank you for your message!</p>
                    <p className="mt-2">
                        I will try to respond to your email within
                        24-48 hours.
                    </p>
                    <p className="cursor-pointer mt-4 font-xs underline hover:text-custom-flamingo" onClick={e => setThanks(false)}>clear</p>
                </div>
            }
        </div>
    )
}