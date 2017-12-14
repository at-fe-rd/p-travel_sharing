class UserSerialized{
  constructor(name, avatar, provider) {
    this.provider = provider;
    this.name = name;
    this.avatar = avatar;
  }
}

module.exports = UserSerialized