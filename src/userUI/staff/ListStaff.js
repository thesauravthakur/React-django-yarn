import React from 'react';
import { Card, Skeleton } from 'antd';
import axios from 'axios';

class ListStaff extends React.Component {
    state = {
        loading: false,
        error: null,
        data: []
    }

    componentDidMount() {
        this.setState({ loading: true });
        axios.get('http://127.0.0.1:8000/staff/').then(response => {
            console.log(response.data)
            this.setState({
                loading: false,
                data: response.data
            })
        }).catch(err => {
            this.setState({
                error: err,
                loading: false,
            })

        });
    }

    render() {
        const { loading, error, data } = this.state;
        const classes = {
            img: {
                height: '10px',
                width: '10px'
            }
        }
        return (
            <div className="" className={{
                background: " #ececec",
                padding: "30px"
            }}>
                <Card title={<p style={{ color: "white" }}>Company Staff</p>} style={{ backgroundColor: '#001529', color: "red" }} >
                    {loading &&
                        <div>
                            <Card >
                                <Skeleton active />
                            </Card>
                            <Card style={{ marginTop: '10px' }} >
                                <Skeleton active />
                            </Card>
                            <Card style={{ marginTop: '10px' }} >
                                <Skeleton active />
                            </Card>
                        </div>
                    }
                    {data.map(item => {
                        return (
                            <Card key={item.id} title={item.name} bordered={true} style={{ width: "100%", marginTop: '10px' }}
                                extra={<a href="#">More</a>} >
                                <div className="row">
                                    <div className="col-lg-9">
                                        <p>{item.department}</p>
                                        <p>{item.email}</p>
                                        <p>{item.phone}</p>
                                        <p>{item.address}</p>




                                    </div>
                                    <div style={{}} className="col-lg-3">
                                        <img src={item.image} style={{
                                            border: "1px solid #ddd",
                                            borderRadius: "4px",
                                            padding: "5px",
                                            height: 'auto',
                                            width: "100%"
                                        }} height="180" width="180" />

                                    </div>
                                </div>

                            </Card>
                        )
                    })}

                </Card>
            </div>
        )
    }
}
export default ListStaff;