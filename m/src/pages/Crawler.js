import React, { Component } from 'react'
import Header from '../comp/header.js'
import { Toast } from 'antd-mobile'
import Axios, { apiStatusCheck } from '../utils/request.js'
import ImgList from '../comp/imgList/imgList.js'
import './topic/topic.scss'

class Crawler extends Component {
  constructor(props) {
    super(props)
    const navData = ['连载', '热门', '关注']
    this.state = {
      navData: navData,
      data: '',
      userInfo: '',
      imgFile: '',
      imgUrl: '',
      postBtn: false,
      imagesListShow: false
    }
    console.log(this.props.match.params.id)
  }
  componentDidMount() {
    let id = this.props.match.params.id
    this.getTopicById(id)
  }
  getTopicById(id) {
    Axios.get(`/api/v1/crawlers/${id}`)
      .then(res => {
        console.log(res.success)
        if (res.success) {
          this.setState({
            data: res.data,
            userInfo: res.data.userInfo
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  getLocalImage = event => {
    let that = this
    this.setState(
      {
        file: event.target.files[0]
      },
      () => {
        console.log(this.state.file)
        //创建读取文件的对象
        var reader = new FileReader()
        //正式读取文件
        reader.readAsDataURL(this.state.file)
        //为文件读取成功设置事件
        reader.onload = e => {
          that.setState({
            imgFile: e.target.result
          })
        }
      }
    )
  }

  uploadImage() {
    let formFile = new FormData()
    formFile.append('image', this.state.file)
    Axios.post(`/api/v1/upload`, formFile, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(res => {
        apiStatusCheck(this.props, res, () => {
          Toast.info('图片上传成功')
          this.setState({
            imgUrl: res.data.data,
            postBtn: true
          })
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  postArticle() {
    if (this.state.data.isPost) return
    if (!this.state.imgUrl) {
      Toast.info('请上传图片')
    } else {
      Axios.post(`/api/v1/crawlers/${this.props.match.params.id}`, {
        imgUrl: this.state.imgUrl
      })
        .then(res => {
          apiStatusCheck(this.props, res, () => {
            this.setState({
              imgUrl: res.data
            })
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  imageChange(val) {
    this.toggleBody(0)
    this.setState({
      imgUrl: val.originUrl,
      imgFile: val.originUrl,
      postBtn: true,
      imagesListShow: false
    })
  }

  openImageList() {
    this.toggleBody(1)
    this.refs.ImgList.list()
    this.setState({
      imagesListShow: true
    })
  }

  toggleBody(isPin) {
    if (isPin) {
      document.body.style.height = '100vh'
      document.body.style['overflow-y'] = 'hidden'
    } else {
      document.body.style.height = 'unset'
      document.body.style['overflow-y'] = 'auto'
    }
  }

  render() {
    // const Message = (props) => {
    // 	return (
    // 		<div className='uploadBox'>
    // 			<label htmlFor="uploadImage" className="uploadImage">

    // 				<input type="file" hidden id="uploadImage" name="uploadImage" onChange={(e) => this.getLocalImage(e)} />
    // 				上传封面图片
    // 				<img className={this.state.imgFile ? 'previewImage' : 'hide'} src={this.state.imgFile} />
    // 			</label>
    // 			<div className={this.state.imgFile && !this.state.imgUrl ? 'btn active show' : 'btn hide'} onClick={this.uploadImage.bind(this)}>上传图片</div>
    // 		</div>
    // 	)
    // }
    return (
      <div className="topic">
        <Header navData={this.state.navData} />
        <ImgList
          ref="ImgList"
          onImageSelectChange={this.imageChange.bind(this)}
          show={this.state.imagesListShow}
        />
        <div className="topicWrap">
          {!this.state.data.isPost ? (
            <div className="uploadBox">
              <div className="uploadImageWrap">
                <div
                  className="getSysImgList"
                  onClick={this.openImageList.bind(this)}
                >
                  GET
                </div>
                <label htmlFor="uploadImage" className="uploadImage">
                  <input
                    type="file"
                    hidden
                    id="uploadImage"
                    name="uploadImage"
                    onChange={e => this.getLocalImage(e)}
                  />
                  上传封面图片
                  <img
                    alt="uploadImage"
                    className={this.state.imgFile ? 'previewImage' : 'hide'}
                    src={this.state.imgFile}
                  />
                </label>
              </div>
              <div
                className={
                  this.state.imgFile && !this.state.imgUrl
                    ? 'btn active show'
                    : 'btn hide'
                }
                onClick={this.uploadImage.bind(this)}
              >
                上传图片
              </div>
            </div>
          ) : (
            ''
          )}
          <h1>{this.state.data.title}</h1>
          <div className="author">
            <span>文1 / {this.state.userInfo.username}</span>
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: this.state.data.content }}
          />
          <div className="readNum">
            <span>阅读 {this.state.data.view}</span>
          </div>
          <div
            onClick={this.postArticle.bind(this)}
            className={
              this.state.postBtn && !this.state.data.isPost
                ? 'btn active'
                : 'btn'
            }
          >
            发布入库
          </div>
        </div>
      </div>
    )
  }
}
export default Crawler
