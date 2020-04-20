$(document).ready(function () {
    console.log("ready!");

    // i loved using javascript in the project this way... so why not practice right?
    // portfolio button 
    $("#portBtn").on("click", function (event) {
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
                    <a href="https://erikdono.github.io/CalenderApp/" target="_blank">
                        <img src="assets/workDayScheduler.png" alt="rps" />
                    </a>
                </div>
                <div class="caption">
                    <button class="btn"> <a href="https://github.com/ErikDono/CalenderApp" target="_blank"> Work Day Scheduler (W.I.P.)
                        </a></button>
                </div>
            </div>
            <div class="col-md-6 col-sm-5">
                <div class="buffer Thumbnail">
                    <a href="https://erikdono.github.io/PasswordGeneratorWIP/" target="_blank">
                        <img src="assets/passPic.png" alt="rps" />
                    </a>
                </div>
                <div class="caption">
                    <button class="btn"> <a href="https://github.com/ErikDono/PasswordGeneratorWIP" target="_blank"> Password Generator
                           GitHub (W.I.P.)
                        </a></button>
                </div>
            </div>
            <div class="col-md-6 col-sm-5">
                <div class="buffer Thumbnail">
                    <a href="https://jbenj-upenn.github.io/CovidActivities/" target="_blank">
                        <img src="assets/prjPic.png" alt="rps" />
                    </a>
                </div>
                <div class="caption">
                    <button class="btn"> <a href="https://github.com/jbenj-upenn/CovidActivities"target="_blank"> Covid Activities
                           GitHub (W.I.P.)
                        </a></button>
                </div>
            </div>
        </div>`)
    });

    // contact button 
    $("#contBtn").on("click", function (event) {
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
            <button type="submit" id = "emailSub" class="btn btn-primary">Submit</button>
        </form>`)

        // trying to get emailSub button to take items from the form, and append it to an email! This will have to be a future deploy
        // $("#emailSub").on("click", function (event){


        // })
    });

    // Mission Statement button
    $("#missBtn").on("click", function (event) {
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

    // Resume button
    $("#abtBtn").on("click", function (event) {
        event.preventDefault();
        $("#mainCard").html(`<div class="col-md-6 col-sm-6">
                    <!-- <div class="picContainer"> -->
                    <div class="buffer Thumbnail">

                        <img src="assets/Pic.jpg" />

                    </div>
                    <div class="caption">
                        <button class="btn"> <a href="assets/resumeDoc.pdf" target="_blank"> My Resume
                                (WIP!)
                            </a></button>
                    </div>
                    <!-- </div> -->
                </div>
                <!-- <div class="overflow"></div> This was an attempt to make the text flow under the picture-->
                <div class="col-md-6 col-sm-4">
                    <div class="paragraph">

                        Hello, I a glad you stopped by my page. I'm just staring to learn how to code, so please let me
                        know
                        if this is horrible!
                        The dog in the photo is Georgie, my Papillion Chihuahua. He is about to turn 11, and get two
                        younger
                        sisters!
                        I love hockey, Formula 1, gaming, and figuring out problems. So far, i am enjoying coding, as it
                        just seems like one big puzzle!
                        Right now, i happen to be writing just to fill some space. and i dont really want to write more
                        about myself! I am glad that we are not being
                        graded on our writing content, and rather our html and css content! I rarely do not want to talk
                        about myself, this
                        is truely a strange moment. I am so focused on wanting to write the code, that the only reason i
                        am
                        writing is to see if it
                        spills over beneth the image i've put in, as it did on the image in the example.
                    </div>
                </div>`)


    });












});