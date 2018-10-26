<template>
  <div class="login">
    <div class="container">
        <div class="card col-10 p-0 offset-1">
            <div class="card-header text-uppercase bg-danger text-center text-white">
                Đăng nhập
            </div>
            <div class="card-body">
                <form method="POST" id="signup-form" class="signup-form">
                    <div class="form-group">
                        <label for="nameUser">Username</label>
                        <input type="text" class="form-control" id="inputNameUser" placeholder="Enter name...">
                    </div>
                    <div class="form-group">
                        <label for="inputPass">Password</label>
                        <input type="text" class="form-control" id="inputPass" placeholder="Password...">
                    </div>
                    <div class="form-group text-center">
                        <button type="submit" class="btn btn-danger ">Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
