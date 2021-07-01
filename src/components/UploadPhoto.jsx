import {Upload, Button} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import React from "react";
import * as utils from '../utils/fetch-request'
import '../css/ribbon.css'

const fileList = [
    {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        uid: '-2',
        name: 'yyy.png',
        status: 'error',
    },
];

const action = '/api/photo/upload/' + utils.getHeaderFromLocalStorage('id')
const UploadPhoto = () => (
        <div className="background_cloud">
       <div className="ribbon">

    <Upload
        action={action}
        listType="picture"
        className="upload-list-inline"
        multiple={true}
    >
        <span className="ribbon4"><Button className="btn" icon={<UploadOutlined/>}>上传照片</Button></span>
    </Upload>
       </div>
</div>
)

export default UploadPhoto;
