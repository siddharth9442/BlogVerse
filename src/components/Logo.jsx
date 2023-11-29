import React from 'react'

function Logo({className}) {
  return (
    <div className='w-full'>
      <img 
      src="https://document-export.canva.com/eHMBM/DAFyi3eHMBM/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20231128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231128T083332Z&X-Amz-Expires=89365&X-Amz-Signature=6f5ea1cfc0304697defe51b0fc50da9d33e83636cb5ab67a2ddceaaea440c114&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2029%20Nov%202023%2009%3A22%3A57%20GMT" 
      alt="Logo"
      className={`${className}`}
      />
    </div>
  )
}

export default Logo