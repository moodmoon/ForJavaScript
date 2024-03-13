class Membership {
  static autoid = 1;

  constructor() {
    this.members = [];
  }
  subscribe(name) {
    if (this.findMemberName(name) === -1) {
      return this.members.push({
        memberId: Membership.autoid++,
        memberName: name,
      });
    } else {
      return -1;
    }
  }

  unsubscribe(id) {
    if (this.findMemberId(id) !== -1) {
      this.members.splice(this.findMemberId(id), 1);
      return id
    } else {
        return -1
    }
  }

  findMemberId(id) {
    return this.members.findIndex((member) => member.memberId === id);
  }

  findMemberName(name) {
    return this.members.findIndex(
      (member) => member.memberName.toLowerCase() === name.toLowerCase()
    );
  }
}

const member1 = new Membership();
member1.subscribe('pearmai')
member1.subscribe('pearmai')
member1.subscribe('boo')
member1.subscribe('panipak')
member1.subscribe('panuwat')
member1.subscribe('pearwa')
console.log(member1);
console.log('find index of name boo: ', member1.findMemberName('Boo'));
console.log('find index of name pearmai: ', member1.findMemberName('Pearmai'));
console.log('find index of id1: ', member1.findMemberId(1));
console.log('find index of id2: ', member1.findMemberId(2));
console.log('-------------------------');
// console.log('unsubscribe id2: ', member1.unsubscribe(2));
// console.log('unsubscribe id3: ', member1.unsubscribe(3));
console.log('unsubscribe: ', member1.unsubscribe(-100));
console.log(member1);