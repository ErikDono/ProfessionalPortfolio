$(document).ready(function () {
    console.log("ready!");

    // i loved using javascript in the project this way... so why not practice right?
    // portfolio button 
    $("#portButt").on("click", function (event) {
        event.preventDefault();
        console.log("clicked")
        $("#mainCard").html(`
        <div class="row">
            <div class="rowHeaderStyle">
                <h1>Portfolio</h1>
            </div>
        </div>
        <div class="divider"></div>
        <div class="row">
            <div class="col-md-6 col-sm-5">
                <div class="buffer Thumbnail">
                    <a href="https://erikdono.github.io/CalenderApp/">
                        <img src="assets/workDayScheduler.png" alt="rps" />
                    </a>
                </div>
                <div class="caption">
                    <button class="btn"> <a href="https://github.com/ErikDono/CalenderApp"> Work Day Scheduler (W.I.P.)
                        </a></button>
                </div>
            </div>
            <div class="col-md-6 col-sm-5">
                <div class="buffer Thumbnail">
                    <a href="https://github.com/ErikDono/PasswordGeneratorWIP">
                        <img src="assets/passPic.png" alt="rps" />
                    </a>
                </div>
                <div class="caption">
                    <button class="btn"> <a href="https://erikdono.github.io/PasswordGeneratorWIP/"> Password Generator
                            (W.I.P.)
                        </a></button>
                </div>
            </div>
            <div class="col-md-6 col-sm-5">
                <div class="buffer Thumbnail">
                    <a href="https://github.com/jbenj-upenn/CovidActivities">
                        <img src="assets/prjPic.png" alt="rps" />
                    </a>
                </div>
                <div class="caption">
                    <button class="btn"> <a href="https://jbenj-upenn.github.io/CovidActivities/"> Covid Activities
                            (W.I.P.)
                        </a></button>
                </div>
            </div>
        </div>`);
        // contact button 
        $("#contactMe").on("click", function (event) {
            event.preventDefault();
            $("#mainCard").html(`
            <div class="rowHeaderStyle">
            <p>Contact Me</p>
        </div>
        <div class="divider"></div>

        <form>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Name</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Inquiring about</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Mortgage</option>
                    <option>Webpage Design</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Please leave me a breif message bout your inquiry:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>`)
            // about me butt
            $("#missStatButt").on("click", function (event) {
                event.preventDefault();
                $("#mainCard").html(`
                <div class="row">
                <div class="rowHeaderStyle">
                    <h1>Mission Statement</h1>
                </div>
            </div>
            <div class="divider"></div>
            <p> My careers in banking, gaming, and education have shown me that the less usable your product is, the
                less
                likely that<br>
                your users will have the experience that you assume them to have! From financing a home to running a
                program, every user<br>
                expects a high degree of usability. That is why I have made it my goal as a student of the UPENN coding
                academy to learn<br>
                how to deploy code that is not only clean and readable, but is impeccably user friendly. I am still
                learning, but I plan<br>
                on making all of my websites as smooth as possible with each iteration. Please feel free to contact me
                with
                any ideas<br>
                you have to make this portfolio page any cleaner, or more user friendly!<br>
                <br>
                Please click around, and visit the different pages of the site! <br><br><br>

                “Change is the law of life. And those who look only to the past or the present are certain to miss the
                future.”
            </p>`)
            });












        });
    })
})