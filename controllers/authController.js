import expressValidator from 'express-validator'
import { transSuccess, transError } from '../../lang/vi'
import { auth } from '../services'
import passport from 'passport'

const { validationResult } = expressValidator

const getLoginRegister = (req, res) => {
  res.render('auth/master', {
    errors: req.flash('errors'),
    success: req.flash('success')
  })
}

const postLoginLocal = async (req, res) => {
  passport.authenticate('local', (err, user) => {
    if (err) return res.status(500).send(err)

    // login fail
    if (!user) return res.redirect('/login-register')

    // verify 2fa
    if (user.is2FAEnabled) {
      return res.redirect(`/verify-2fa/${user._id}`)
    }

    // login success will save info into req.user
    req.logIn(user, err => {
      if (err) return res.status(500).send(err)
      req.flash('success', transSuccess.loginSuccess(user.username))
      return res.redirect('/')
    })
  })(req, res)
}

export { getLoginRegister, postLoginLocal }
