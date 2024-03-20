import {Card, Divider, Button, Pagination} from 'antd'
import "./sider.css"
import {QuestionCircleFilled, UsergroupAddOutlined, CustomerServiceOutlined, TeamOutlined, FlagFilled, InfoCircleFilled, FieldTimeOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons'
import {PlusOutlined} from '@ant-design/icons'
import RecElement from '@/component/sider/recElement/recElement'

const helpCenter = ['隐私保护指引', '申请开通机构号', '联系我们']
const reportCenter = ['涉未成年举报', '网络谣言举报', '涉企侵权举报', '更多']
const aboutLawyer = ['下载', '招聘', '指南', '协议', '更多']

const navList = [
    { id: 1, title: '稍后阅读', link: '#' , className: 'navLi',icon: <FieldTimeOutlined />},
    { id: 2, title: '我的关注', link: '#' , className: 'navLi',icon: <HeartOutlined />},
    { id: 3, title: '我的收藏', link: '#' , className: 'navLi',icon: <StarOutlined />},
    { id: 4, title: '我的邀请', link: '#' , className: 'navLi',icon: <TeamOutlined />},
    { id: 5, title: '帮助与客服', link: '#', className: 'navLi',icon: <CustomerServiceOutlined />}
]

const recData = [
    {id: 1, title: 'aa', des: '哈哈哈', avatar: 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png'},
    {id: 2, title: 'bb', des: '哈哈哈', avatar: 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png'},
    {id: 3, title: 'cc', des: '哈哈哈', avatar: 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png'},

]

const Sider = () => {

    const pageHandleChange = () => {

    }

  return (
      <div className={'side-content'}>
          <div className={'focus-list sideCommon'}>
              <Card bordered={false}>
                  <ul>
                      {navList.map(item => (
                          <li className={item.className} key={item.id}>
                              <Button icon={item.icon}  href={item.link} type="text">{item.title}</Button>
                          </li>
                      ))}
                  </ul>
              </Card>
          </div>
          <div className={'account-info sideCommon'}>
              <Card bordered={false} style={{width: '100%'}}>
                  <div style={{marginBottom: '3px'}}>
                      <UsergroupAddOutlined /> <span>推荐关注</span>
                  </div>
                  <div className={'rec-list'}>
                      {recData.map(item => (
                          <RecElement key={item.id} item={item}/>
                      ))}
                  </div>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                      <Pagination size="small" total={50}/>
                  </div>
              </Card>
          </div>
          <div className={'web-info sideCommon'}>
              <Card bordered={false}>
                  <div style={{marginTop: '5px'}}>
                      <h3><QuestionCircleFilled/>帮助中心</h3>
                      {helpCenter.map(item => (<span><a href={''}>{item}</a></span>))}
                  </div>
                  <div style={{marginTop: '5px'}}>
                      <h3><FlagFilled />举报中心</h3>
                      {reportCenter.map(item => (<span><a href={''}>{item}</a></span>))}
                  </div>
                  <div style={{marginTop: '5px'}}>
                      <h3><InfoCircleFilled />关于lawyer</h3>
                      {aboutLawyer.map(item => (<span><a href={''}>{item}</a></span>))}
                  </div>
                  <Divider />
                  <div>
                      <span><a>京 ICP 证 000000 号 · </a></span>
                      <span><a>京 ICP 备 00000000 号 - 1 ·</a></span>
                      <span><a>京公网安备 00000000000 号 ·</a></span>
                      <span><a>京网文[2024]00000000 号 ·</a></span>
                      <span><a>药品医疗器械网络信息服务备案（京）网药械信息备字（2022）第00000号 ·</a></span>
                      <span><a>广播电视节目制作经营许可证:（京）字第00000号 ·</a></span>
                      <span><a>服务热线：00000000 · Investor Relations ·</a></span>
                      <span><a>© 2024 · 违法和不良信息举报：00000000 ·</a></span>
                      <span><a>举报邮箱：0000000@gmail.com</a></span>
                  </div>
              </Card>
          </div>
      </div>
  )
}

export default Sider