import {Upload, Button} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import React from "react";
import * as utils from '../utils/fetch-request'

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
    <Upload
        action={action}
        listType="picture"
        className="upload-list-inline"
        multiple={true}
    >
        <Button icon={<UploadOutlined/>}>上传照片</Button>
    </Upload>
)

export default UploadPhoto;
