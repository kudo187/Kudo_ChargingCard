<template>
  <div class="register">
    <div class="container">
        <div class="card">
            <div class="card-header text-uppercase bg-info text-center text-white">
                Đăng ký thành viên
            </div>
            <div class="card-body">
                <form method="POST" id="signup-form" class="signup-form">
                    <div class="form-group">
                        <label for="nameUser">Tên người dùng</label>
                        <input type="text" class="form-control" id="inputNameUser" placeholder="Enter name...">
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputPass">Password</label>
                            <input type="pass" class="form-control" id="inputPass" placeholder="Password">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputRePassword4">Re-Password</label>
                            <input type="re-password" class="form-control" id="inputRePassword4" placeholder="Re-Password">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck">
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div class="form-group text-center">
                        <button type="submit" class="btn btn-primary ">Đăng ký</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
