import { Component } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
    }
    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center">従業員リスト</h2>
                <div className="row">
                    <button className="btn btn-primary"><Link to={"/add-employee"}>従業員の追加</Link></button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>性</th>
                                <th>名前</th>
                                <th>emailアドレス</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default ListEmployeeComponent;