<template>
  <div class="profile pending">
        <div class="container ">
            <ul class="nav nav-pills nav-justified pills-rounded ">
                <li class="nav-item">
                    <a class="nav-link active font-weight-bold text-uppercase" data-toggle="tab" href="#panelWithdrawal" role="tab">Thông tin cá nhân</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link font-weight-bold text-uppercase" data-toggle="tab" href="#panelBuyCard" role="tab">Tài khoản ngân hàng</a>
                </li>
            </ul>
            <!-- Tab panels -->
            <div class="tab-content pt-0">
                <!--Panel 1-->
                <div class="tab-pane fade in show active" id="panelWithdrawal" role="tabpanel">
                    <br>
                    <div class="col-lg">
                        <h4>
                            <span> Thông tin tài khoản</span>
                        </h4>
                        <div class="clearfix"></div>
                        <table class="table table-borderless">
                            <tr>
                                <td class="text-right">Số điện thoại</td>
                                <td>
                                    <span class="text-danger">0965288463</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-right">Email</td>
                                <td>
                                    <b>
                                        <span>nvkhoa1871997@gmail.com</span>
                                    </b>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-right">Ngày mở tài khoản</td>
                                <td>
                                    <b>
                                        <span>22-09-2018</span>
                                    </b>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-right">Key phân phối</td>
                                <td>
                                    <b>
                                        <span>784423</span>
                                    </b>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-right">Tình trạng tài khoản</td>
                                <td class="text-success">
                                    <b>
                                        <span>Active</span>
                                    </b>
                                </td>
                            </tr>
                        </table>
                        <!-- end BgTblUserInfo -->
                        <h4>
                            <p class="text-danger">Thông tin cá nhân</p>
                        </h4>
                        <div class="InfoCurrent" id="account">
                            <div class="col-xs-12">
                                <form>
                                    <div class="form-group row">
                                        <label for="name" class="col-4 col-form-label">Avatar</label>
                                        <div class="col-8">
                                            <input type="file" class="cmnd-input" style="display: none;" />
                                            <img src="../assets/client/images/user.png" class="cmnd-img pointer" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="name" class="col-4 col-form-label"> Họ và tên (
                                            <span class="text-danger">*</span>)</label>
                                        <div class="col-8">
                                            <input type="text" value="Nguyễn Văn Khoa" tabindex="103" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="name" class="col-4 col-form-label"> Giới tính (
                                            <span class="text-danger">*</span>)
                                        </label>
                                        <div class="col-8">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="sexRadio" id="men" value="Nam">
                                                <label class="form-check-label" for="men">Nam</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="sexRadio" id="woman" value="Nu">
                                                <label class="form-check-label" for="woman">Nữ</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="name" class="col-4 col-form-label"> Số CMND (
                                            <span class="text-danger">*</span>)</label>
                                        <div class="col-8">
                                            <input type="text" value="Nguyễn Văn Khoa" tabindex="103" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="name" class="col-4 col-form-label"> Tình trạng chứng thực</label>
                                        <div class="col-8" style="color:#3c763d; font-weight: bold;">
                                            <span>Chưa chứng thực</span>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="name" class="col-4 col-form-label">Số điện thoại nhà (
                                            <span class="text-danger">*</span>)</label>
                                        <div class="col-8">
                                            <input type="text" value="0965288463" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="name" class="col-4 col-form-label"> Số nhà (
                                            <span class="text-danger">*</span>)</label>
                                        <div class="col-8">
                                            <input type="text" value="Thôn 4, Ðiền Hòa, Phong Ðiền, Thừa Thiên Huế" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="name" class="col-4 col-form-label"> Đường (
                                            <span class="text-danger">*</span>)</label>
                                        <div class="col-8">
                                            <input type="text" value="street" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="name" class="col-4 col-form-label"> </label>
                                        <div class="col-8">
                                            <div class="row">
                                                <div class="selectpicker col-sm-6">
                                                    <span class="arrow-up"></span>
                                                    <select class="form-control">
                                                        <option value="-1">Chọn tỉnh / thành phố</option>
                                                    </select>
                                                </div>
                                                <div class="selectpicker col-sm-6">
                                                    <select class="form-control">
                                                        <option value="-1">Chọn quận / huyện</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group text-right">
                                        <div class="col-sm-7  col-sm-offset-4">
                                            <input type="submit" value="Cập Nhật" class="btn btn-outline-danger" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/.Panel 1-->
                <!--Panel 2-->
                <div class="tab-pane fade" id="panelBuyCard" role="tabpanel">
                    <br>
                    <div class="col-lg">
                        <div class="alert alert-warning" role="alert">
                            <strong>Hiện tại!</strong> Bạn chưa có ngân hàng nào.
                        </div>
                        <table class="table table-inverse">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Tên tài khoản</th>
                                    <th>Sốt tài khoản</th>
                                    <th>Số trên thẻ</th>
                                    <th>Ngân hàng</th>
                                    <th>Chi nhánh</th>
                                    <th>Xóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="btn btn-success"><i class="fa fa-plus mr-2"></i>Thêm ngân hàng</div>
                    </div>
                </div>
                <!--/.Panel 2-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
