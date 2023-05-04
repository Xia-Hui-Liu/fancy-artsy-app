import React from 'react';
import Image from 'next/image';

type ContactProps = {
  isContactPage: boolean;
  searchQuery: string
}

const Contacts: React.FC<ContactProps> = ({ isContactPage }) => {
  return (
    <div className="container">
      <div className="flex mb-6 text-left">
        <div className="mr-4 pt-20 ">
          {isContactPage ? (
            <>
            <div>
                <h3 className="text-3xl font-bold text-center">上海菲世科技有限公司</h3>
                <p className="text-xl text-center">Shanghai Fancy Technology Co. Ltd</p>
            </div>
            <div>
                <p className='text-2xl mb-10 mt-10 text-center' style={{ textDecoration: "underline" }}>Contact Us</p>
                <p className="text">Mobile:&nbsp; +86 134 0169 3760 (China)&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; +63 096 1271 8816 (Philippines)</p>
                <p className="text">Viber: &nbsp;+63 096 1271 8816&nbsp;&nbsp;&nbsp;&nbsp;<br></br> WhatsApp:&nbsp; +63 096 1271 8816</p>
                <p className="email">Email: &nbsp;
                    <a href="mailto:fancyartsy82@gmail.com" className="email-link">fancyartsy82@gmail.com</a> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="mailto:lxy198281@163.com" className="email-link">lxy198281@163.com</a>
                </p>
                <p className="text mt-5">
                    Add: &nbsp;199#, Qianyu Public Road,
                    Chenjia Town,
                    Chongming District,
                    Shanghai 202150,
                    China
                </p>
            </div>
          </>):(
             <div>
                <p className='text-base text-center '>Contact Us</p><hr></hr><br></br>
                <p className="text-sm text-left">
                  Mobile:&nbsp; +86 134 0169 3760 (China) <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+63 096 1271 8816 (Philippines)
                  </p>
                <p className="text-sm mt-3 text-left">Viber:&nbsp; +63 096 1271 8816 <br></br> WhatsApp:&nbsp; +63 096 1271 8816</p>
                <p className="text-sm mt-3 text-left">Email:<br></br>
                    <a href="mailto:fancyartsy82@gmail.com" className="email-link">&nbsp;fancyartsy82@gmail.com</a><br></br>
                    <a href="mailto:lxy198281@163.com" className="email-link">&nbsp;lxy198281@163.com</a>
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
