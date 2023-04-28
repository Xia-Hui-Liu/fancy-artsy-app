import React from 'react';
import Image from 'next/image';

type ContactProps = {
  isContactPage: boolean;
  searchQuery: string
}

const Contacts: React.FC<ContactProps> = ({ isContactPage }) => {
  return (
    <div className="container">
      <div className="flex items-center justify-center mb-6 text-center">
        <div className="mr-4 pt-20 ">
          {isContactPage ? (
            <>
            <div>
                <h3 className="text-2xl font-bold">上海菲世科技有限公司</h3>
                <p className="text-lg">Shanghai Fancy Technology Co. Ltd</p>
            </div>
            <div>
                <p className='text-2xl mb-10 mt-10' style={{ textDecoration: "underline" }}>Contact Us</p>
                <p className="text">Mobile: +86 134 0169 3760 (China) +63 096 1271 8816 (Philippines)</p>
                <p className="text">Viber: +63 096 1271 8816 WhatsApp: +63 096 1271 8816</p>
                <p className="email">Email: 
                    <a href="mailto:fancyartsy82@gmail.com" className="email-link">fancyartsy82@gmail.com</a> 
                    <a href="mailto:lxy198281@163.com" className="email-link">lxy198281@163.com</a>
                </p>
                <p className="text">
                    Add: 199#, Qianyu Public Road,
                    Chenjia Town,
                    Chongming District,
                    Shanghai 202150,
                    China
                </p>
            </div>
          </>):(
             <div>
                <p className='text-base '>Contact Us</p><hr></hr><br></br>
                <p className="text-sm text-left">
                  Mobile: +86 134 0169 3760 (China) <br></br>
                          +63 096 1271 8816 (Philippines)
                  </p>
                <p className="text-sm mt-3 text-left">Viber: +63 096 1271 8816 <br></br> WhatsApp: +63 096 1271 8816</p>
                <p className="text-sm mt-3 text-left">Email:<br></br>
                    <a href="mailto:fancyartsy82@gmail.com" className="email-link">fancyartsy82@gmail.com</a><br></br>
                    <a href="mailto:lxy198281@163.com" className="email-link">lxy198281@163.com</a>
                </p>
                <p className="text-sm text-left">
                    Add: <br></br> 199#, Qianyu Public Road,
                        Chenjia Town,
                        Chongming District,
                        Shanghai 202150,
                        China
                </p>
            </div>
          )}
        </div>
    </div>
</div>
  )

};

export default Contacts;
