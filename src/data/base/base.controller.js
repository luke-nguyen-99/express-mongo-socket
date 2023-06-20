const baseCrud = (model) => {
  return {
    getAll: async (req, res) => { 
      return res.status(200).send(await model.find().exec()) 
    },
    getOne: async (req, res) => { 
      return res.status(200).send(await model.findById(req.params.id).exec())
    },
    create: async (req, res) => {
      try {
        const input = req.body;
        await model.create(input);
        return res.status(201).send('Created successfully');
      } catch (e) {
        return res.status(400).send(e.message);
      }
    },
    update: async (req, res) => {
     
     try {
      const input = req.body;
      const { id } = req.params;
      await model.updateOne({ id }, input)
      return res.status(200).send('Updated successfully');
    } catch (e) {
      return res.status(400).send(e.message);
    }
    },
    delete: async (req, res) => {
      try {
        await model.deleteOne({ id })
        return res.status(200).send('Deleted successfully');
      } catch (e) {
        return res.status(400).send(e.message);
      }
    }
  }
}

module.exports = { baseCrud }